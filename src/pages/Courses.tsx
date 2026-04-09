import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GlowCard } from "@/components/ui/glow-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, Star, BookOpen, Zap, Brain, Code, Palette, BarChart3, ExternalLink, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useSubscription } from "@/hooks/useSubscription";

const courses = [
  {
    id: 1,
    title: "AI Cho Người Mới Bắt Đầu",
    description: "Hiểu AI từ zero — không cần biết code. Khóa học giải thích AI, Machine Learning, Deep Learning bằng ngôn ngữ đời thường. Sau khóa này bạn sẽ hiểu ChatGPT hoạt động như thế nào và biết cách ứng dụng AI vào công việc.",
    icon: Brain,
    level: "Cơ bản",
    duration: "8 giờ",
    lessons: 24,
    students: "2,340",
    rating: 4.9,
    tags: ["AI Basics", "ChatGPT", "Prompt"],
    youtubePlaylist: "https://youtube.com/@dunglendaidi",
    free: true,
    requiredTier: "free" as const,
  },
  {
    id: 2,
    title: "Prompt Engineering Mastery",
    description: "Từ prompt đơn giản đến kỹ thuật Chain-of-Thought, Few-Shot Learning, và System Prompts. Học cách viết prompt hiệu quả cho ChatGPT, Claude, Gemini — ứng dụng vào viết content, phân tích dữ liệu, và lập trình.",
    icon: Zap,
    level: "Trung bình",
    duration: "12 giờ",
    lessons: 36,
    students: "1,856",
    rating: 4.8,
    tags: ["Prompt Engineering", "LLM", "Productivity"],
    youtubePlaylist: "https://youtube.com/@dunglendaidi",
    free: true,
    requiredTier: "free" as const,
  },
  {
    id: 3,
    title: "Tự Động Hóa Với AI — No Code",
    description: "Sử dụng n8n, Make, và Zapier kết hợp AI để tự động hóa quy trình kinh doanh. Từ tự động trả lời email, phân loại khách hàng, đến tạo nội dung marketing — tất cả không cần viết một dòng code.",
    icon: BarChart3,
    level: "Trung bình",
    duration: "10 giờ",
    lessons: 30,
    students: "1,523",
    rating: 4.7,
    tags: ["n8n", "Automation", "No-Code"],
    youtubePlaylist: "https://youtube.com/@dunglendaidi",
    free: true,
    requiredTier: "free" as const,
  },
  {
    id: 4,
    title: "Python + AI: Lập Trình AI Thực Chiến",
    description: "Dành cho developer muốn xây dựng ứng dụng AI. Học Python cơ bản, sau đó đi sâu vào LangChain, OpenAI API, vector databases, và cách build AI chatbot, RAG system, AI agent từ đầu.",
    icon: Code,
    level: "Nâng cao",
    duration: "20 giờ",
    lessons: 48,
    students: "987",
    rating: 4.9,
    tags: ["Python", "LangChain", "OpenAI API"],
    youtubePlaylist: "https://youtube.com/@dunglendaidi",
    free: false,
    requiredTier: "pro" as const,
  },
  {
    id: 5,
    title: "AI Sáng Tạo: Hình Ảnh & Video",
    description: "Tạo hình ảnh với Midjourney, DALL-E, Stable Diffusion. Chỉnh sửa video với AI. Học cách dùng ComfyUI để xây dựng workflow tạo nội dung visual chuyên nghiệp cho marketing và mạng xã hội.",
    icon: Palette,
    level: "Trung bình",
    duration: "14 giờ",
    lessons: 32,
    students: "2,105",
    rating: 4.8,
    tags: ["Midjourney", "Stable Diffusion", "ComfyUI"],
    youtubePlaylist: "https://youtube.com/@dunglendaidi",
    free: false,
    requiredTier: "pro" as const,
  },
  {
    id: 6,
    title: "Kinh Doanh Với AI: Từ Ý Tưởng Đến Thu Nhập",
    description: "Khóa học dành cho entrepreneur muốn tận dụng AI để kinh doanh. Cách xây dựng sản phẩm AI, tìm thị trường ngách, marketing tự động, và mô hình kinh doanh một người với AI — thu nhập thụ động từ các sản phẩm số.",
    icon: BookOpen,
    level: "Nâng cao",
    duration: "16 giờ",
    lessons: 40,
    students: "1,234",
    rating: 4.9,
    tags: ["Business", "Solopreneur", "AI Products"],
    youtubePlaylist: "https://youtube.com/@dunglendaidi",
    free: false,
    requiredTier: "pro" as const,
  },
];

const levelColors: Record<string, string> = {
  "Cơ bản": "bg-green-500/10 text-green-400 border-green-500/30",
  "Trung bình": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  "Nâng cao": "bg-red-500/10 text-red-400 border-red-500/30",
};

const Courses = () => {
  const { isPro } = useSubscription();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Khóa Học <span className="glow-text">AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Học AI từ cơ bản đến nâng cao qua video bài giảng trên YouTube. 3 khóa miễn phí, 3 khóa Pro.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">6</div>
                <div className="text-sm text-muted-foreground">Khóa học</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">210+</div>
                <div className="text-sm text-muted-foreground">Video bài giảng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary glow-text">10K+</div>
                <div className="text-sm text-muted-foreground">Học viên</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => {
              const locked = !course.free && !isPro;
              return (
              <GlowCard key={course.id} className={`group hover:scale-[1.02] transition-transform flex flex-col ${locked ? "opacity-80" : ""}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors glow-box">
                    <course.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className={levelColors[course.level]}>{course.level}</Badge>
                      {course.free
                        ? <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">Miễn phí</Badge>
                        : <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                            <Lock className="w-3 h-3 mr-1" /> Pro
                          </Badge>
                      }
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Play className="w-4 h-4" /> {course.lessons} bài</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" /> {course.rating}</span>
                </div>

                <a href={course.youtubePlaylist} target="_blank" rel="noopener noreferrer" className="block">
                  {locked ? (
                    <Link to="/pricing" className="block">
                      <Button variant="outline" className="w-full border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10">
                        <Lock className="w-4 h-4 mr-2" />
                        Nâng cấp Pro để mở khóa
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full bg-primary hover:bg-primary/90 shadow-[0_0_15px_hsl(var(--primary)/0.4)] group/btn">
                      <Play className="w-4 h-4 mr-2" />
                      Xem Trên YouTube
                      <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover/btn:opacity-100" />
                    </Button>
                  )}
                </a>
              </GlowCard>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <GlowCard glowIntensity="high" className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">Muốn Học Sâu Hơn?</h3>
              <p className="text-muted-foreground mb-6">
                Tham gia cộng đồng AINewbieVN để thảo luận, đặt câu hỏi, và nhận hỗ trợ trực tiếp từ các mentor AI kinh nghiệm.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://youtube.com/@dunglendaidi" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Play className="w-4 h-4 mr-2" /> YouTube Channel
                  </Button>
                </a>
                <Button className="bg-primary hover:bg-primary/90 shadow-[0_0_15px_hsl(var(--primary)/0.4)]">
                  Tham Gia Cộng Đồng
                </Button>
              </div>
            </GlowCard>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
