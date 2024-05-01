import React, { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

export interface ReactTypedProps extends TypedOptions{
  strings: string[];
  onComplete?: () => void;
  fadeOut?: boolean;
  fadeOutClass?: string;
  typeSpeed?: number;
  played?:boolean;
}

const ReactTyped: React.FC<ReactTypedProps> = ({
  strings,
  onComplete,
  fadeOut = false,
  fadeOutClass = "typed-fade-out",
  typeSpeed = 100,
  played = false
}) => {
  const typedRef = useRef<Typed | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const options: TypedOptions = {
        strings,
        typeSpeed,
        onComplete: () => {
          
          if (onComplete) {
            onComplete();
            setTimeout( () => typedRef.current?.destroy(), 10000)
          }
          if (fadeOut && elementRef.current) {
            elementRef.current.classList.add(fadeOutClass);
          }
        }
      };
      typedRef.current = new Typed(elementRef.current, options);

      return () => {
        // Clean up code
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, [strings, onComplete, fadeOut, fadeOutClass, typeSpeed]);

  useEffect(() => {
    if (played && typedRef.current) {
      typedRef.current.destroy();
      if (elementRef.current) {
        elementRef.current.remove();
      }
    }
  }, [played]);

  return <div ref={elementRef} />;
};

export default ReactTyped;
