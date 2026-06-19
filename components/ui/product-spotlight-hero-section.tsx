"use client"

import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState, memo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { DollarSign } from "lucide-react"

// Sample product data for animations with mock images
const sampleProducts = [

  // KEY PRODUCTS - travel destinations that will be displayed (1-5)
  { 
    id: 1, 
    name: "Peak District National Park", 
    price: "£12.50", 
    score: 98, 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 2, 
    name: "Cotswolds Historic Villages", 
    price: "£15.00", 
    score: 94, 
    image: "https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 3, 
    name: "West Midlands Safari Park", 
    price: "£18.50", 
    score: 96, 
    image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 4, 
    name: "Stratford-upon-Avon Tour", 
    price: "£10.00", 
    score: 92, 
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 5, 
    name: "Malvern Hills Scenic Area", 
    price: "£14.00", 
    score: 97, 
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

  // BACKROUND PRODUCTS (6-20)
  { 
    id: 6, 
    name: "Birmingham Botanical Gardens", 
    price: "£9.00", 
    score: 94, 
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 7, 
    name: "Cadbury World", 
    price: "£18.50", 
    score: 96, 
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 8, 
    name: "Warwick Castle", 
    price: "£22.00", 
    score: 97, 
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 9, 
    name: "Ironbridge Gorge Heritage Site", 
    price: "£8.00", 
    score: 91, 
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 10, 
    name: "Drayton Manor Theme Park", 
    price: "£25.00", 
    score: 95, 
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 11, 
    name: "Black Country Living Museum", 
    price: "£14.00", 
    score: 93, 
    image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 12, 
    name: "Lichfield Cathedral", 
    price: "£0.00", 
    score: 92, 
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1760&auto=format&fit=crop"
  },
  { 
    id: 13, 
    name: "Shropshire Hills National Area", 
    price: "£5.00", 
    score: 94, 
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 14, 
    name: "Cannock Chase Forest Walk", 
    price: "£6.00", 
    score: 95, 
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 15, 
    name: "Sutton Park Nature Reserve", 
    price: "£3.00", 
    score: 89, 
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 16, 
    name: "Kenilworth Castle Grounds", 
    price: "£11.50", 
    score: 91, 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 17, 
    name: "Coventry Transport Museum Tour", 
    price: "£12.00", 
    score: 93, 
    image: "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 18, 
    name: "Telford Steam Railway Excursion", 
    price: "£8.50", 
    score: 90, 
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 19, 
    name: "Wyre Forest Exploration Trail", 
    price: "£4.50", 
    score: 92, 
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    id: 20, 
    name: "Clent Hills Panoramic View", 
    price: "£3.00", 
    score: 91, 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

// Key products that will follow special animation paths
const keyProducts = sampleProducts.slice(0, 5)
const backgroundProducts = sampleProducts.slice(5)

interface ProductMetadata {
  name: string
  price: string
  score: number
}

// Helper function to generate random entry/exit points
function getRandomEdgePoint(containerSize: { width: number; height: number }, edge: 'top' | 'bottom' | 'left' | 'right') {
  const margin = 100 // Start outside visible area
  switch (edge) {
    case 'top':
      return { x: Math.random() * containerSize.width, y: -margin }
    case 'bottom':
      return { x: Math.random() * containerSize.width, y: containerSize.height + margin }
    case 'left':
      return { x: -margin, y: Math.random() * containerSize.height }
    case 'right':
      return { x: containerSize.width + margin, y: Math.random() * containerSize.height }
  }
}

// Helper function to get random point inside container
function getRandomInsidePoint(containerSize: { width: number; height: number }) {
  return {
    x: 50 + Math.random() * (containerSize.width - 100),
    y: 50 + Math.random() * (containerSize.height - 100)
  }
}

// Helper function to create curved path between two points
function createCurvedPath(start: { x: number; y: number }, end: { x: number; y: number }, containerSize: { width: number; height: number }) {
  // Add subtle curve variation for natural movement
  const curveVariation = 30 + Math.random() * 60
  const midX = (start.x + end.x) / 2 + (Math.random() - 0.5) * curveVariation
  const midY = (start.y + end.y) / 2 + (Math.random() - 0.5) * curveVariation
  
  // Create 3 points for smoother movement
  return [
    start,
    { x: midX, y: midY },
    end
  ]
}

interface AnimatedProductProps {
  product: typeof sampleProducts[0]
  isKeyProduct?: boolean
  containerSize: { width: number; height: number }
  onReachCenter?: (metadata: ProductMetadata) => void
  onComplete?: () => void
}

function AnimatedProduct({ product, isKeyProduct = false, containerSize, onReachCenter, onComplete }: AnimatedProductProps) {
  const controls = useAnimation()

  useEffect(() => {
    let active = true;
    const animateProduct = async () => {
      if (isKeyProduct) {
        // Featured product: curved path to center, pause, then continue same trajectory
        const edges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right']
        const entryEdge = edges[Math.floor(Math.random() * edges.length)]
        
        const startPoint = getRandomEdgePoint(containerSize, entryEdge)
        const centerPoint = { x: containerSize.width / 2 - 40, y: containerSize.height / 2 - 40 }

        if (!active) return;
        // Set initial position (outside container, blurred)
        await controls.set({
          x: startPoint.x,
          y: startPoint.y,
          scale: 0.7,
          filter: "blur(4px)",
          opacity: 0.8
        })

        if (!active) return;
        // Animate to center with curve
        await controls.start({
          x: centerPoint.x,
          y: centerPoint.y,
          scale: 1.8, // Enlarge significantly when reaching center
          filter: "blur(0px)",
          opacity: 1,
          transition: {
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
            type: "tween"
          }
        })

        if (!active) return;
        // Show metadata
        onReachCenter?.({
          name: product.name,
          price: product.price,
          score: product.score,
        })

        // Pause for 3 seconds (completely stopped)
        await new Promise(resolve => {
          const t = setTimeout(() => resolve(null), 3000);
          return () => clearTimeout(t);
        });

        if (!active) return;
        // Move to a random edge after the pause
        const exitEdges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right']
        const randomExitEdge = exitEdges[Math.floor(Math.random() * exitEdges.length)]
        const randomExitPoint = getRandomEdgePoint(containerSize, randomExitEdge)

        if (!active) return;
        // Continue to exit point
        await controls.start({
          x: randomExitPoint.x,
          y: randomExitPoint.y,
          scale: 0.7, // Slightly larger exit scale for key products
          filter: "blur(4px)",
          opacity: 0.5,
          transition: {
            duration: 2.5 + Math.random() * 1, // Smooth exit
            ease: "easeInOut",
            type: "tween"
          }
        })

      } else {
        // Background product: continuous edge-to-edge floating with instant restart
        const animateLoop = async () => {
          while (active) {
            const edges: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right']
            const entryEdge = edges[Math.floor(Math.random() * edges.length)]
            const exitEdge = edges[Math.floor(Math.random() * edges.length)]
            
            const startPoint = getRandomEdgePoint(containerSize, entryEdge)
            const endPoint = getRandomEdgePoint(containerSize, exitEdge)
            const path = createCurvedPath(startPoint, endPoint, containerSize)

            if (!active) return;
            // Set initial position with variation
            await controls.set({
              x: startPoint.x,
              y: startPoint.y,
              scale: 0.5 + Math.random() * 0.4,
              filter: "blur(2px)",
              opacity: 0.6 + Math.random() * 0.4
            })

            // Animate through curved path with consistent speed
            for (let i = 1; i < path.length; i++) {
              if (!active) return;
              await controls.start({
                x: path[i].x,
                y: path[i].y,
                transition: {
                  duration: 2 + Math.random() * 2, // Slower for better visibility
                  ease: "linear",
                  type: "tween" // More performant than spring
                }
              })
            }

            // Small delay before restarting to prevent overwhelming
            await new Promise(resolve => {
              const t = setTimeout(() => resolve(null), 100);
              return () => clearTimeout(t);
            });
          }
        }

        animateLoop()
      }

      // Notify completion for key products
      if (isKeyProduct && active) {
        onComplete?.()
      }
    }

    animateProduct()

    return () => {
      active = false;
      controls.stop();
    }
  }, [isKeyProduct, containerSize])

  return (
    <motion.div
      className="absolute w-16 h-16 md:w-20 md:h-20"
      animate={controls}
      initial={{
        scale: 0.5 + Math.random() * 0.4,
        filter: "blur(2px)",
        opacity: 0.6 + Math.random() * 0.4
      }}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden border border-border/30 shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 64px, 80px"
          priority={isKeyProduct}
          quality={75}
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </motion.div>
  )
}



interface CircularProgressProps {
  value: number
  size?: number
  className?: string
}

function CircularProgress({ value, size = 32, className }: CircularProgressProps) {
  const percentage = Math.min(Math.max(value, 0), 100)
  
  return (
    <div 
      className={cn("relative flex items-center justify-center", className)} 
      style={{ width: size, height: size }}
    >
      {/* Background circle */}
      <div 
        className="absolute inset-0 rounded-full border-[2.5px] border-gray-200 dark:border-gray-700"
        style={{ borderColor: 'hsl(var(--muted))' }}
      />
      {/* Progress circle using conic-gradient - much more performant */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, hsl(142 76% 36%) 0deg ${(percentage * 3.6)}deg, transparent ${(percentage * 3.6)}deg 360deg)`,
          mask: `radial-gradient(circle at center, transparent ${size/2 - 3}px, black ${size/2 - 2}px)`,
          WebkitMask: `radial-gradient(circle at center, transparent ${size/2 - 3}px, black ${size/2 - 2}px)`
        }}
      />
      {/* Center text */}
      <span className="relative text-xs font-bold text-green-600 dark:text-green-400 z-10">
        {value}
      </span>
    </div>
  )
}

interface MetadataDisplayProps {
  metadata: ProductMetadata
}

const MetadataDisplay = memo(function MetadataDisplay({ metadata }: MetadataDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        {/* Price bubble - left edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-lg p-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <DollarSign className="w-3 h-3 text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Est. Fare</div>
              <div className="text-sm font-bold text-gray-900 dark:text-white">{metadata.price}</div>
            </div>
          </div>
        </motion.div>

        {/* Profit bubble - right edge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -15 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-lg p-2.5 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <CircularProgress value={metadata.score} size={32} />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Rating</div>
              <div className="text-sm font-bold text-green-600 dark:text-green-400">{metadata.score}/100</div>
            </div>
          </div>
        </motion.div>

        {/* Product name bubble - top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.0, duration: 0.3 }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-lg p-3 shadow-lg min-w-[200px] max-w-[280px]"
        >
          <div className="text-sm font-semibold text-gray-900 dark:text-white text-center line-clamp-2 leading-tight">
            {metadata.name}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
})

export function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 800, height: 600 })
  const [currentMetadata, setCurrentMetadata] = useState<ProductMetadata | null>(null)
  const [keyProductIndex, setKeyProductIndex] = useState(0)
  const [isKeyProductAnimating, setIsKeyProductAnimating] = useState(true)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const [backgroundProductInstances] = useState(() => {
    // Create stable background product instances (no creation/destruction)
    return Array.from({ length: 15 }, (_, index) => ({
      id: `bg-stable-${index}`,
      product: backgroundProducts[index % backgroundProducts.length]
    }))
  })

  // Debounce container size updates to avoid animation glitches
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null
    const updateSize = () => {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          setContainerSize({ width: rect.width, height: rect.height })
        }
      }, 100)
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  // Only render the next featured product after the previous one fully exits
  const handleKeyProductComplete = useCallback(() => {
    setIsKeyProductAnimating(false)
    setTimeout(() => {
      setKeyProductIndex((prev) => (prev + 1) % keyProducts.length)
      setIsKeyProductAnimating(true)
    }, 100) // Small delay to ensure unmount before remount
  }, [])

  const handleProductReachCenter = useCallback((metadata: ProductMetadata) => {
    setCurrentMetadata(metadata)
    setTimeout(() => {
      setCurrentMetadata(null)
    }, 3000)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center py-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Explore Exciting Local
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Green Destinations
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover the popular parks, historical sites, and museums we frequently connect families and school groups to. Enjoy safe, dedicated excursions tailored to SEND requirements.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#contact">Book an Excursion</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Product Field */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              ref={containerRef}
              className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-border/50"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, hsl(var(--primary) / 0.08), transparent 60%),
                  radial-gradient(circle at 70% 80%, hsl(var(--accent) / 0.08), transparent 60%),
                  linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted) / 0.2))
                `,
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              {/* Stable background products - always visible */}
              {mounted && backgroundProductInstances.map((item) => (
                <AnimatedProduct
                  key={item.id}
                  product={item.product}
                  isKeyProduct={false}
                  containerSize={containerSize}
                />
              ))}
              {/* Only render the featured product if animating */}
              {mounted && isKeyProductAnimating && (
                <AnimatedProduct
                  key={`key-${keyProducts[keyProductIndex].id}-${keyProductIndex}`}
                  product={keyProducts[keyProductIndex]}
                  isKeyProduct={true}
                  containerSize={containerSize}
                  onReachCenter={handleProductReachCenter}
                  onComplete={handleKeyProductComplete}
                />
              )}
              {/* Metadata display (small, positioned in corner) */}
              <AnimatePresence mode="wait">
                {currentMetadata && (
                  <MetadataDisplay metadata={currentMetadata} />
                )}
              </AnimatePresence>
              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/10 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
