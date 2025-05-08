
import { Image } from "@heroui/react"


export default function Test() {
    return (
        <div className="flex size-full items-center justify-center">
            <div className="size-430 shrink-0 scale-50 sm:scale-75 lg:scale-100">
                <div className="relative top-(--top,30%) right-(--right,54%) grid size-full origin-top-left rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-4 gap-8 transform-3d">
                    <div className="flex flex-col gap-8" style={{transform: 'translateY(750px)'}}>
                        <Image src="/ui-blocks-col-1-row-1.png" className="aspect-[970/580] ring ring-gray-950/5" width="970" height="580" alt="" />
                        <Image src="/ui-blocks-col-1-row-2.png" className="aspect-[971/582] ring ring-gray-950/5" width="971" height="582" alt="" />
                        <Image src="/ui-blocks-col-1-row-3.png" className="aspect-[971/820] ring ring-gray-950/5" width="971" height="820" alt="" />
                        <Image src="/ui-blocks-col-1-row-4.png" className="aspect-[970/508] ring ring-gray-950/5" width="970" height="508" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}