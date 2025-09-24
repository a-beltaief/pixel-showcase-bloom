import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PortfolioProject } from "@/data/portfolio";

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!project) return null;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 gap-0 bg-background/95 backdrop-blur-xl border border-border/50 [&>button]:hidden">
        <DialogHeader className="p-2 pb-0 border-b border-border/20 space-y-0">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zu Projekten
            </button>
            <DialogTitle className="text-lg font-semibold">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="flex-1">
          <div className="w-full h-full overflow-hidden relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-muted-foreground">Projekt wird geladen...</p>
                </div>
              </div>
            )}
            {project.embedUrl ? (
              <iframe
                src={project.embedUrl}
                className="w-full h-full border-0"
                title={project.title}
                onLoad={handleIframeLoad}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Keine Vorschau verfügbar</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};