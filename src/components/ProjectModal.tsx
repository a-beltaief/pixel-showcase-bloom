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
      <DialogContent className="fixed left-[50%] top-[50%] z-50 flex flex-col w-full max-w-[95vw] h-[95vh] translate-x-[-50%] translate-y-[-50%] border bg-background/95 backdrop-blur-xl shadow-lg duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-105 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg [&>button]:hidden transform transition-all">
        <DialogHeader className="flex flex-row items-center justify-between p-2 border-b border-border/20">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Zurück zu Projekten
            </button>
          </div>
          <DialogTitle className="text-lg font-semibold">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 min-h-0">
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
      </DialogContent>
    </Dialog>
  );
};