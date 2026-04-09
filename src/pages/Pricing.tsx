import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Sparkles } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useSubscription } from "@/hooks/useSubscription";
import { Link } from "react-router-dom";

// Stripe Payment Links — CEO: replace with LIVE links from Stripe Dashboard
const PAYMENT_LINKS = {
  pro: import.meta.env.VITE_STRIPE_PRO_LINK || "#",
  premium: import.meta.env.VITE_STRIPE_PREMIUM_LINK || "#",
};

const tiers = [
  {
    name: "Miễn Phí",
    price: "0đ",
    period: "mãi mãi",
    description: "Bắt đầu hành trình AI của bạn",
    icon: Sparkles,
    features: [
      "3 khóa học cơ bản",
      "Blog AI tiếng Việt",
      "Cộng đồng Discord",
      "Video bài giảng YouTube",
      "Newsletter hàng tuần",
    ],
    excluded: [
      "Khóa học nâng cao",
      "Tài liệu chuyên sâu",
      "1:1 mentoring",
      "Chứng chỉ hoàn thành",
    ],
    cta: "Đang sử dụng",
    tier: "free" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "199.000đ",
    period: "/tháng",
    description: "Cho người muốn học nghiêm túc",
    icon: Zap,
    features: [
      "Tất cả khóa học (6+ khóa)",
      "Tài liệu & bài tập chuyên sâu",
      "Nhóm học tập Pro Discord",
      "Code examples & templates",
      "Hỏi đáp ưu tiên",
      "Cập nhật nội dung sớm",
    ],
    excluded: [
      "1:1 mentoring",
      "Chứng chỉ hoàn thành",
    ],
    cta: "Nâng cấp Pro",
    tier: "pro" as const,
    popular: true,
  },
  {
    name: "Premium",
    price: "499.000đ",
    period: "/tháng",
    description: "Mentoring cá nhân + Chứng chỉ",
    icon: Crown,
    features: [
      "Mọi thứ của Pro",
      "1:1 mentoring (2 buổi/tháng)",
      "Review dự án cá nhân",
      "Chứng chỉ hoàn thành",
      "Ưu tiên tuyển dụng AI jobs",
      "Tham gia dự án thực tế",
      "Lifetime community access",
    ],
    excluded: [],
    cta: "Nâng cấp Premium",
    tier: "premium" as const,
    popular: false,
  },
];

const Pricing = () => {
  const { user } = useAuth();
  const { subscription } = useSubscription();

  const handleUpgrade = (tier: "pro" | "premium") => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    const link = PAYMENT_LINKS[tier];
    if (link && link !== "#") {
      // Append user email for Stripe prefill
      const url = new URL(link);
      if (user.email) {
        url.searchParams.set("prefilled_email", user.email);
      }
      window.location.href = url.toString();
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
              Bảng Giá
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Đầu tư vào <span className="glow-text">Tương Lai AI</span> của bạn
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Học AI bằng tiếng Việt, từ cơ bản đến nâng cao. Chọn gói phù hợp với mục tiêu của bạn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier) => {
              const isCurrentTier = subscription.tier === tier.tier;
              const Icon = tier.icon;
              return (
                <GlowCard
                  key={tier.name}
                  className={`relative flex flex-col ${
                    tier.popular ? "border-primary/50 scale-[1.02]" : ""
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4">
                        Phổ biến nhất
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {tier.excluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 opacity-40">
                        <Check className="w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-sm line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.tier === "free" ? (
                    <Button variant="outline" className="w-full" disabled={isCurrentTier}>
                      {isCurrentTier ? "Đang sử dụng" : "Miễn phí"}
                    </Button>
                  ) : (
                    <Button
                      className={`w-full ${tier.popular ? "glow-box" : ""}`}
                      variant={tier.popular ? "default" : "outline"}
                      onClick={() => handleUpgrade(tier.tier)}
                      disabled={isCurrentTier}
                    >
                      {isCurrentTier ? "Đang sử dụng" : tier.cta}
                    </Button>
                  )}
                </GlowCard>
              );
            })}
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-center mb-8">Câu Hỏi Thường Gặp</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Tôi có thể hủy bất cứ lúc nào không?",
                  a: "Có! Bạn có thể hủy subscription bất cứ lúc nào. Bạn vẫn được truy cập cho đến hết chu kỳ thanh toán.",
                },
                {
                  q: "Thanh toán bằng cách nào?",
                  a: "Chúng tôi hỗ trợ Visa, Mastercard qua Stripe. Chuyển khoản ngân hàng và MoMo sẽ được hỗ trợ sớm.",
                },
                {
                  q: "Khóa học có cập nhật không?",
                  a: "Có! Nội dung được cập nhật liên tục theo xu hướng AI mới nhất. Bạn trả một lần, học mãi.",
                },
                {
                  q: "Pro và Premium khác gì?",
                  a: "Pro cho bạn toàn bộ khóa học + tài liệu. Premium thêm mentoring 1:1, review dự án, và chứng chỉ chính thức.",
                },
              ].map((faq) => (
                <GlowCard key={faq.q} className="!p-4">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          {!user && (
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-4">
                Chưa có tài khoản? Đăng ký miễn phí để bắt đầu ngay.
              </p>
              <Link to="/signup">
                <Button size="lg" className="glow-box">
                  Tạo Tài Khoản Miễn Phí
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
