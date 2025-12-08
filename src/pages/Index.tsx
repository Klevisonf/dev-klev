import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background glow effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      </div>
      
      <ProfileCard />
    </main>
  );
};

export default Index;
