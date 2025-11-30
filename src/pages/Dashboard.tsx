import { useState } from "react";
import { Search, Menu, Bell, Sparkles, TrendingUp, Star, Package, ChevronRight, Users, Brain, Zap, Shield, Target, Rocket, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlowCard } from "@/components/ui/glow-card";
import { Badge } from "@/components/ui/badge";
import { PremiumIcon, IconBox } from "@/components/ui/premium-icon";

// Import product images
import heroImage from "@/assets/hero-ai-dashboard.jpg";
import productEmail from "@/assets/product-email-marketing.jpg";
import productChatbot from "@/assets/product-chatbot.jpg";
import productContent from "@/assets/product-content-gen.jpg";
import productAnalytics from "@/assets/product-analytics.jpg";
import productLeadGen from "@/assets/product-lead-gen.jpg";
import productSocial from "@/assets/product-social-media.jpg";
import productFunnel from "@/assets/product-sales-funnel.jpg";
import productHR from "@/assets/product-hr-recruitment.jpg";
import workflowImg from "@/assets/workflow-automation.jpg";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const products = [
    {
      id: 1,
      name: "AI Email Marketing Automation",
      creator: "Marketing AI Pro",
      verified: true,
      rating: 4.9,
      reviews: 456,
      price: "$149/month",
      users: "2.3K",
      image: productEmail,
      badge: "🔥 HOT",
      category: "Marketing"
    },
    {
      id: 2,
      name: "Customer Support Chatbot",
      creator: "Support AI Team",
      verified: true,
      rating: 4.8,
      reviews: 892,
      price: "Free - $299",
      users: "5.6K",
      image: productChatbot,
      badge: "⚡ TRENDING",
      category: "Customer Service"
    },
    {
      id: 3,
      name: "Content Generation Engine",
      creator: "ContentAI VN",
      verified: true,
      rating: 4.7,
      reviews: 234,
      price: "$99/month",
      users: "1.8K",
      image: productContent,
      badge: "🆕 NEW",
      category: "Content Creation"
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      creator: "Data Wizards",
      verified: true,
      rating: 5,
      reviews: 123,
      price: "Custom",
      users: "890",
      image: productAnalytics,
      badge: "💎 PREMIUM",
      category: "Analytics"
    },
    {
      id: 5,
      name: "Lead Generation AI",
      creator: "LeadGen Pro",
      verified: true,
      rating: 4.6,
      reviews: 567,
      price: "$199/month",
      users: "3.1K",
      image: productLeadGen,
      badge: "🔥 HOT",
      category: "Sales"
    },
    {
      id: 6,
      name: "Social Media Automation",
      creator: "Social AI Hub",
      verified: true,
      rating: 4.8,
      reviews: 789,
      price: "$129/month",
      users: "4.2K",
      image: productSocial,
      badge: "⚡ TRENDING",
      category: "Marketing"
    },
  ];

  const stats = [
    { number: "1,200+", label: "Workflows", icon: Zap },
    { number: "5,000+", label: "Members", icon: Users },
    { number: "300+", label: "Projects", icon: Target },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  const categories = [
    "🤖 AI Chatbots & Agents",
    "⚙️ Automation Workflows",
    "📊 Data Analytics Tools",
    "💬 Customer Support AI",
    "📝 Content Generation",
    "🎨 Creative AI Tools",
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-20" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-glow-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />

      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo & Menu Toggle */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden hover:bg-primary/10"
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
              
              <div className="flex items-center gap-2">
                <IconBox icon={Brain} size="md" variant="aurora" background="gradient" rounded="lg" />
                <span className="text-xl font-display font-bold glow-text hidden sm:inline">AINewbieVN</span>
              </div>
            </div>

            {/* Center: Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <PremiumIcon icon={Search} size="sm" variant="gradient" />
                </div>
                <Input
                  placeholder="Tìm kiếm AI tools, workflows, giải pháp..."
                  className="pl-12 h-11 font-sans bg-muted/50 border-primary/20 focus:border-primary glow-border transition-all"
                />
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="hidden md:inline-flex relative hover:bg-primary/10 group">
                <PremiumIcon icon={Bell} size="sm" variant="glow" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
              </Button>
              <Button variant="outline" className="hidden md:inline-flex font-sans border-primary/50 hover:bg-primary/10">
                Profile
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.4)] hidden sm:inline-flex font-sans">
                <PremiumIcon icon={Sparkles} size="sm" variant="holographic" className="mr-2" />
                Upgrade Pro
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex pt-16">
        {/* Left Sidebar */}
        <aside
          className={`fixed left-0 top-16 bottom-0 bg-background/95 backdrop-blur-lg border-r border-primary/20 transition-all duration-300 z-40 custom-scrollbar overflow-y-auto ${
            sidebarOpen ? "w-64" : "w-0 -translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="p-4 space-y-6">
            {/* Quick Browse */}
            <div className="space-y-2">
              <Button variant="secondary" className="w-full justify-start gap-3 font-sans bg-primary/10 text-primary hover:bg-primary/20 glow-border">
                <PremiumIcon icon={Target} size="sm" variant="glow" />
                For You
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 font-sans hover:bg-primary/10">
                <PremiumIcon icon={TrendingUp} size="sm" variant="gradient" />
                Trending Tools
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 font-sans hover:bg-primary/10">
                <PremiumIcon icon={Star} size="sm" variant="gradient" />
                Most Popular
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 font-sans hover:bg-primary/10">
                <PremiumIcon icon={Sparkles} size="sm" variant="holographic" />
                New Releases
              </Button>
            </div>

            <div className="border-t border-primary/20 pt-4">
              <p className="text-xs font-display font-semibold text-muted-foreground mb-3 px-3">DANH MỤC SẢN PHẨM</p>
              <div className="space-y-1">
                {categories.map((item, idx) => (
                  <Button key={`cat-${idx}`} variant="ghost" className="w-full justify-start text-sm font-sans hover:bg-primary/10 hover:text-primary">
                    {item}
                  </Button>
                ))}
              </div>
            </div>

            <div className="border-t border-primary/20 pt-4">
              <p className="text-xs font-display font-semibold text-muted-foreground mb-3 px-3">CỘNG ĐỒNG</p>
              <div className="space-y-2">
                <div className="px-3 py-2 rounded-lg bg-primary/10 glow-box">
                  <div className="flex items-center gap-2 text-sm font-sans">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-semibold text-primary">5,234 Online Now</span>
                  </div>
                </div>
                <Button variant="ghost" className="w-full justify-start text-sm font-sans hover:bg-primary/10">
                  💡 Workflow Gallery
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm font-sans hover:bg-primary/10">
                  🎓 Learning Resources
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 relative z-10 ${sidebarOpen ? "lg:ml-64" : ""}`}>
          <div className="container mx-auto px-4 py-8 space-y-12">
            {/* Hero Banner */}
            <section className="relative h-[400px] rounded-2xl overflow-hidden group">
              <img
                src={heroImage}
                alt="AI Dashboard Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <Badge variant="hot" animation="pulse" className="shadow-lg">
                  🔥 Trending This Week
                </Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold glow-text">
                  AI Customer Support Agent
                </h1>
                <p className="text-lg font-body text-muted-foreground max-w-2xl">
                  Giảm 80% chi phí support • Phản hồi 24/7 • Tích hợp đa nền tảng
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.5)] font-sans group">
                    Xem Demo Ngay
                    <PremiumIcon icon={ChevronRight} size="sm" variant="glow" className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 font-sans">
                    Tìm Hiểu Thêm
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats Bar */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <GlowCard key={`stat-${idx}`} className="p-6 text-center group hover:scale-105 transition-transform">
                  <IconBox icon={stat.icon} size="lg" variant="neon" background="gradient" className="mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold glow-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-sans text-muted-foreground">
                    {stat.label}
                  </div>
                </GlowCard>
              ))}
            </section>

            {/* Products Grid */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold glow-text">
                    AI Tools & Solutions Đang Hot 🔥
                  </h2>
                  <p className="font-body text-muted-foreground mt-2">
                    Khám phá các giải pháp AI hàng đầu
                  </p>
                </div>
                <Button variant="outline" className="border-primary/50 hover:bg-primary/10 font-sans group">
                  Xem Tất Cả
                  <PremiumIcon icon={ChevronRight} size="sm" variant="gradient" className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <GlowCard
                    key={product.id}
                    className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge variant="outline" className="absolute top-3 left-3 bg-background/80 backdrop-blur">
                        {product.category}
                      </Badge>
                      <Badge 
                        variant={product.badge.includes('HOT') ? 'hot' : product.badge.includes('TRENDING') ? 'trending' : product.badge.includes('NEW') ? 'new' : 'premium'}
                        animation="float"
                        className="absolute top-3 right-3"
                      >
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-display font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                        <span>👤 {product.creator}</span>
                        {product.verified && <Badge variant="verified" className="text-xs">✓</Badge>}
                      </div>
                      <div className="flex items-center justify-between text-sm font-sans">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{product.rating}</span>
                          <span className="text-muted-foreground">({product.reviews})</span>
                        </div>
                        <span className="text-muted-foreground">
                          👥 {product.users}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-primary/20">
                        <span className="text-lg font-display font-bold text-primary">
                          {product.price}
                        </span>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-[0_0_10px_hsl(var(--primary)/0.4)]">
                          Try Now
                        </Button>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </section>

            {/* Workflow Templates */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-display font-bold glow-text">
                    Workflow Templates
                  </h2>
                  <p className="font-body text-muted-foreground mt-2">
                    1,200+ Mẫu Tự Động Hóa - Tiết kiệm 70% thời gian
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((idx) => (
                  <GlowCard key={`workflow-${idx}`} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={workflowImg}
                        alt={`Workflow ${idx}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <PremiumIcon icon={Rocket} size="2xl" variant="holographic" animate />
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-display font-semibold group-hover:text-primary transition-colors">Marketing Workflow #{idx}</h4>
                      <div className="text-sm font-sans text-muted-foreground">by Automation Pro ✓</div>
                      <div className="flex gap-4 text-sm font-sans">
                        <span>❤️ 234</span>
                        <span>💾 89</span>
                      </div>
                      <Button size="sm" className="w-full" variant="outline">
                        Use Template
                      </Button>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
