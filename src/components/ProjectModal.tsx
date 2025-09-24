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
      <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-background/95 backdrop-blur-xl border border-border/50">
        <DialogHeader className="p-6 pb-4 border-b border-border/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Zurück zu Projekten
              </button>
            </div>
            <div className="flex items-center gap-4">
              <DialogTitle className="text-lg font-semibold">
                {project.title}
              </DialogTitle>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 p-6 pt-0">
          <div className="w-full h-full rounded-lg overflow-hidden bg-muted/20 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-muted-foreground">Projekt wird geladen...</p>
                </div>
              </div>
            )}
            {project.embedUrl ? (
              <iframe
                src={project.embedUrl}
                className="w-full h-full border-0 rounded-lg"
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