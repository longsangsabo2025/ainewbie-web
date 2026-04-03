import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users, MessageCircle, Trophy, Lightbulb, Heart, Rocket,
  Youtube, Send, Globe, Star, ArrowRight, Zap
} from "lucide-react";

const communityStats = [
  { label: "Thành viên", value: "5,000+", icon: Users },
  { label: "Bài thảo luận", value: "12,000+", icon: MessageCircle },
  { label: "Dự án cộng đồng", value: "300+", icon: Rocket },
  { label: "Mentor AI", value: "50+", icon: Trophy },
];

const channels = [
  {
    name: "YouTube — ĐỨNG DẬY ĐI",
    description: "Kênh YouTube chính thức với video podcast về phát triển bản thân, AI, và entrepreneurship. Nội dung mới mỗi ngày.",
    icon: Youtube,
    url: "https://youtube.com/@dunglendaidi",
    members: "Đang phát triển",
    color: "text-red-400",
  },
  {
    name: "Telegram Community",
    description: "Nhóm chat chính để thảo luận AI, chia sẻ tài nguyên, hỏi đáp kỹ thuật. Mentor trả lời trong vòng 24h.",
    icon: Send,
    url: "#",
    members: "2,500+ members",
    color: "text-blue-400",
  },
  {
    name: "AINewbieVN Website",
    description: "Blog, khóa học, workflow gallery — tất cả kiến thức AI được tổng hợp tại một nơi. Cập nhật hàng tuần.",
    icon: Globe,
    url: "/blog",
    members: "5,000+ visitors/tháng",
    color: "text-green-400",
  },
];

const highlights = [
  {
    title: "Weekly AI Roundup",
    description: "Mỗi thứ Hai, chúng tôi tổng hợp các tin tức AI quan trọng nhất trong tuần — giúp bạn cập nhật mà không cần đọc 100 bài báo.",
    icon: Lightbulb,
  },
  {
    title: "Show & Tell Sessions",
    description: "Thành viên chia sẻ dự án AI cá nhân — từ chatbot bán hàng đến hệ thống phân tích ảnh vệ tinh. Học từ thực tế, không chỉ lý thuyết.",
    icon: Star,
  },
  {
    title: "AI Hackathon Hàng Quý",
    description: "48 giờ build sản phẩm AI theo chủ đề. Giải thưởng hấp dẫn và cơ hội networking với các công ty tech hàng đầu Việt Nam.",
    icon: Trophy,
  },
  {
    title: "Mentorship 1-on-1",
    description: "Kết nối với AI mentor kinh nghiệm để nhận hướng dẫn cá nhân — từ career path đến technical deep-dive cho dự án cụ thể.",
    icon: Heart,
  },
];

const testimonials = [
  {
    name: "Minh Tuấn",
    role: "Data Analyst → AI Engineer",
    quote: "Nhờ cộng đồng AINewbieVN, tôi đã chuyển từ Data Analyst sang AI Engineer chỉ trong 6 tháng. Các khóa học miễn phí và sự hỗ trợ từ mentor thật sự vô giá.",
  },
  {
    name: "Hồng Nhung",
    role: "Marketing Manager",
    quote: "Tôi không biết code nhưng giờ đã tự động hóa 80% công việc marketing bằng AI. Cộng đồng dạy tôi cách dùng n8n và ChatGPT API một cách thực tế.",
  },
  {
    name: "Đức Anh",
    role: "Startup Founder",
    quote: "AI Hackathon của AINewbieVN là nơi tôi tìm được co-founder cho startup AI của mình. Sản phẩm prototype hoàn thành trong 48 giờ, giờ đã có khách hàng trả tiền.",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl animate-pulse" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cộng Đồng <span className="glow-text">AI Việt Nam</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Nơi những người đam mê AI ở Việt Nam cùng học, cùng xây, cùng phát triển.
              Từ newbie đến expert — ai cũng có chỗ ở đây.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {communityStats.map((stat) => (
                <GlowCard key={stat.label} className="text-center py-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary glow-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tham Gia <span className="glow-text">Ở Đâu?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {channels.map((ch) => (
                <GlowCard key={ch.name} className="group hover:scale-105 transition-transform flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow-box">
                      <ch.icon className={`w-6 h-6 ${ch.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{ch.name}</h3>
                      <span className="text-xs text-muted-foreground">{ch.members}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{ch.description}</p>
                  <a href={ch.url} target={ch.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 group/btn">
                      Tham Gia <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hoạt Động <span className="glow-text">Nổi Bật</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {highlights.map((item) => (
                <GlowCard key={item.title} glowIntensity="low" className="group hover:scale-[1.02] transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 glow-box">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Thành Viên <span className="glow-text">Nói Gì?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t) => (
                <GlowCard key={t.name} glowIntensity="low" className="flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-grow italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <GlowCard glowIntensity="high" className="max-w-3xl mx-auto text-center py-12">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Bắt Đầu?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Tham gia ngay hôm nay — miễn phí 100%. Hàng nghìn người đã bắt đầu hành trình AI của họ cùng AINewbieVN.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">Miễn phí</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">Tiếng Việt</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">Thực chiến</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary px-3 py-1">Mentor hỗ trợ</Badge>
              </div>
            </GlowCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
