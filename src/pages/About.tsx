import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain, Target, Eye, Heart, Rocket, Users, BookOpen,
  Zap, Globe, Mail, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: BookOpen,
    title: "Kiến Thức Mở",
    description: "AI không nên là đặc quyền của thiểu số. Chúng tôi tin rằng mọi người Việt Nam đều xứng đáng được tiếp cận kiến thức AI chất lượng — miễn phí và bằng tiếng Việt.",
  },
  {
    icon: Zap,
    title: "Thực Chiến",
    description: "Lý thuyết suông không đủ. Mỗi bài học đều đi kèm ví dụ thực tế, dự án thực hành, và workflow có thể áp dụng ngay vào công việc.",
  },
  {
    icon: Users,
    title: "Cộng Đồng",
    description: "Học một mình thì nhanh, học cùng nhau thì xa. Cộng đồng AINewbieVN là nơi chia sẻ, hỗ trợ, và cùng phát triển — từ newbie đến expert.",
  },
  {
    icon: Heart,
    title: "Chân Thành",
    description: "Không hype, không oversell. Chúng tôi nói thẳng về những gì AI làm được và chưa làm được, giúp bạn có kỳ vọng thực tế và đầu tư đúng chỗ.",
  },
];

const milestones = [
  { year: "2025", event: "Thành lập AINewbieVN — bắt đầu từ một nhóm Facebook nhỏ" },
  { year: "2025", event: "Ra mắt kênh YouTube ĐỨNG DẬY ĐI — podcast AI & phát triển bản thân" },
  { year: "2026", event: "5,000+ thành viên — mở rộng sang Telegram, blog, khóa học" },
  { year: "2026", event: "Ra mắt nền tảng ainewbievn.shop — tập trung mọi tài nguyên AI" },
  { year: "2026", event: "Xây dựng hệ sinh thái sản phẩm AI — Long Sang Forge, Sabo Arena" },
];

const products = [
  {
    name: "AINewbieVN",
    description: "Cộng đồng và nền tảng giáo dục AI cho người Việt",
    url: "/",
    icon: Brain,
  },
  {
    name: "ĐỨNG DẬY ĐI",
    description: "Kênh YouTube podcast về AI, phát triển bản thân, và khởi nghiệp",
    url: "https://youtube.com/@dunglendaidi",
    icon: Rocket,
  },
  {
    name: "Long Sang Forge",
    description: "Marketplace các AI agent và công cụ tự động hóa cho doanh nghiệp",
    url: "https://longsang.org",
    icon: Zap,
  },
  {
    name: "Sabo Arena",
    description: "Nền tảng giải trí và esports powered by AI",
    url: "https://saboarena.com",
    icon: Globe,
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-glow-cyan/10 rounded-full blur-3xl animate-pulse" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              Về AINewbieVN
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dân Chủ Hóa <span className="glow-text">Kiến Thức AI</span>
              <br />
              Cho Người Việt
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AINewbieVN ra đời từ một niềm tin đơn giản: mọi người Việt Nam đều có quyền
              hiểu và sử dụng AI — bất kể background kỹ thuật.
              Chúng tôi biến những khái niệm phức tạp thành bài học dễ hiểu, thực chiến, và hoàn toàn miễn phí.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow-box">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Sứ Mệnh</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Xây dựng cộng đồng AI lớn nhất Việt Nam, nơi mọi người — từ sinh viên đến CEO —
                  đều có thể học, thực hành, và ứng dụng AI vào cuộc sống và công việc.
                  Mục tiêu của chúng tôi là đào tạo 100,000 người Việt biết dùng AI hiệu quả trước 2028.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center glow-box">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Tầm Nhìn</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Việt Nam trở thành quốc gia có lực lượng lao động am hiểu AI hàng đầu Đông Nam Á.
                  Không chỉ dùng AI — mà tạo ra sản phẩm AI. AINewbieVN là cầu nối giữa
                  công nghệ toàn cầu và ứng dụng địa phương.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Giá Trị <span className="glow-text">Cốt Lõi</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((v) => (
                <GlowCard key={v.title} className="group hover:scale-105 transition-transform text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors glow-box">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hành Trình <span className="glow-text">Phát Triển</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              {milestones.map((m, idx) => (
                <div key={idx} className="flex gap-4 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary glow-box shrink-0" />
                    {idx < milestones.length - 1 && <div className="w-px flex-1 bg-primary/20 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-primary font-bold text-sm">{m.year}</span>
                    <p className="text-foreground">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hệ Sinh Thái <span className="glow-text">Long Sang</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {products.map((p) => (
                <a key={p.name} href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <GlowCard glowIntensity="low" className="group hover:scale-105 transition-transform h-full text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 glow-box">
                      <p.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.description}</p>
                  </GlowCard>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <GlowCard glowIntensity="high" className="max-w-3xl mx-auto text-center py-12">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Liên Hệ</h2>
              <p className="text-muted-foreground mb-6">
                Có câu hỏi, ý tưởng hợp tác, hoặc muốn đóng góp cho cộng đồng? Chúng tôi luôn sẵn sàng lắng nghe.
              </p>
              <div className="flex justify-center gap-4">
                <a href="mailto:contact@ainewbievn.shop">
                  <Button className="bg-primary hover:bg-primary/90 shadow-[0_0_15px_hsl(var(--primary)/0.4)] group">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Cho Chúng Tôi
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Link to="/community">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    Tham Gia Cộng Đồng
                  </Button>
                </Link>
              </div>
            </GlowCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
