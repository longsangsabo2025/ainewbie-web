import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/auth/AuthProvider";

const PaymentSuccess = () => {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const [saved, setSaved] = useState(false);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!user || !supabase || !sessionId || saved) return;

    const recordPayment = async () => {
      // Upsert subscription — the webhook will handle the actual verification
      // This is just optimistic UI update
      const { error } = await supabase.from("user_subscriptions").upsert(
        {
          user_id: user.id,
          payment_transaction_id: sessionId,
          payment_status: "pending_verification",
          plan_id: "pro", // default, webhook will set actual tier
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" }
      );

      if (!error) setSaved(true);
    };

    recordPayment();
  }, [user, sessionId, saved]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-lg mx-auto text-center">
            <GlowCard className="!p-8">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Thanh toán thành công! 🎉
              </h1>
              <p className="text-muted-foreground mb-6">
                Cảm ơn bạn đã nâng cấp. Tài khoản của bạn đang được kích hoạt.
                Bạn sẽ nhận email xác nhận trong vài phút.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/courses">
                  <Button className="w-full glow-box" size="lg">
                    Bắt đầu học ngay <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" className="w-full" size="lg">
                    Về Dashboard
                  </Button>
                </Link>
              </div>
            </GlowCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
