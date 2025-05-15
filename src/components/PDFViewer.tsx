
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Maximize, Minimize, ZoomIn, ZoomOut } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const zoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25);
    }
  };

  const zoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="border-b p-4 flex items-center justify-between">
        <h2 className="font-serif font-bold text-lg truncate">{title}</h2>
        
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center space-x-2">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={zoomOut} 
              disabled={zoom <= 50}
              className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600">{zoom}%</span>
            <button 
              onClick={zoomIn} 
              disabled={zoom >= 200}
              className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>
          <button 
            onClick={toggleFullscreen} 
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5" />
            ) : (
              <Maximize className="w-5 h-5" />
            )}
          </button>
          <a 
            href={pdfUrl} 
            download
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <Download className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <iframe
          src={`${pdfUrl}#page=${currentPage}&zoom=${zoom}`}
          className="w-full h-full border rounded"
          title={`PDF Viewer - ${title}`}
          onLoad={(e) => {
            // In a real application, you would use a PDF.js library to get the total page count
            setTotalPages(10); // This is just a placeholder value
          }}
        />
      </div>
    </div>
  );
};

export default PDFViewer;
