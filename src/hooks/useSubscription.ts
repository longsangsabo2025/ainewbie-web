import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/auth/AuthProvider";

export type SubscriptionTier = "free" | "pro" | "premium";

interface Subscription {
  tier: SubscriptionTier;
  active: boolean;
  expiresAt: string | null;
}

const DEFAULT_SUB: Subscription = { tier: "free", active: true, expiresAt: null };

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription>(DEFAULT_SUB);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !supabase) {
      setSubscription(DEFAULT_SUB);
      setLoading(false);
      return;
    }

    const fetchSub = async () => {
      const { data, error } = await supabase
        .from("user_subscriptions")
        .select("plan_id, status, expires_at")
        .eq("user_id", user.id)
        .eq("status", "active")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error || !data) {
        setSubscription(DEFAULT_SUB);
      } else {
        // map plan_id to tier (vip → premium)
        const tierMap: Record<string, SubscriptionTier> = { pro: "pro", premium: "premium", vip: "premium" };
        setSubscription({
          tier: tierMap[data.plan_id] ?? "free",
          active: data.status === "active",
          expiresAt: data.expires_at,
        });
      }
      setLoading(false);
    };

    fetchSub();
  }, [user]);

  const isPro = subscription.tier === "pro" || subscription.tier === "premium";
  const isPremium = subscription.tier === "premium";

  return { subscription, loading, isPro, isPremium };
}
