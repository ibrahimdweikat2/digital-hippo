import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf} from "lucide-react";
import Link from "next/link";


const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 text-center mx-auto flex flex-col items-center max-w-screen-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Your marketplace for high-quality{' '}
            <span className="text-blue-600">digital assets</span>
            .
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our
            platform is verified by our team to ensure our
            highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row mt-6 gap-4">
            <Link href='/products' className={buttonVariants()}>Browser Trending</Link>
            <Button variant={'ghost'}>Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {
              perks.map(perk=>(
                <div key={perk.name} className="text-center md:flex md:items-center md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center">
                      {<perk.Icon className="w-1/3 h-1/3"/>}
                    </div>
                  </div>

                  <div className="mt-6 ml-4 md:mt-0 md:ml-2 lg:mt-6">
                    <h3 className="font-medium text-base text-gray-900">
                      {perk.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>

                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
