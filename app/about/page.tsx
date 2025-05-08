import { Image } from "@heroui/react";
import {
  sectionWrapper,
  title,
  subtitle,
  titleWrapper,
} from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Chip,
} from "@heroui/react";
import AboutTimeLine from "@/components/about/timeline";
import OrbitCircleExample from "@/components/about/OrbitCircleExample";
export default function About() {
  return (
    <>
      {/* <Image src="/about/computer.webp" /> */}
      <section
        className={sectionWrapper({
          class: "flex flex-col items-center mt-16 lg:mt-30",
        })}
      >
        <div className="max-w-4xl flex flex-col gap-8">
          <div>
            <div className={titleWrapper({ class: "items-center" })}>
              <div className="inline-flex items-center">
                <h1 className={title({ size: "lg" })}>关于我</h1>
              </div>
              <h2
                className={subtitle({
                  class: "text-center",
                })}
              >
                一个又菜又宅的前端切图仔
              </h2>
            </div>
          </div>
          <div>
            <Image src="/article-rooms_2x.jpg" />
          </div>
          <div className="text-center">
            <h2 className={title({ size: "sm" })}>基本信息</h2>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 hidden md:flex">
              <Image src="/about/robot.webp" />
            </div>
            <div className="md:w-1/2 w-full flex items-center px-2">
              <Card className="w-full">
                <CardHeader className="justify-between">
                  <div className="flex gap-5">
                    <Avatar
                      isBordered
                      radius="full"
                      size="md"
                      src="/avatars/avatar.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Jiang Bao
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">
                        前端开发(2015年-至今)
                      </h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                  <p>曾经供职于百度、商汤、OKX、朴津智能等公司</p>
                  <span className="pt-2">
                    精通vue全家桶、熟练使用react及nextjs
                  </span>
                </CardBody>
                <CardFooter className="gap-3">
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                      4
                    </p>
                    <p className=" text-default-400 text-small">Following</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">
                      97.1K
                    </p>
                    <p className="text-default-400 text-small">Followers</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="text-center">
            <h2 className={title({ size: "sm" })}>技能点</h2>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/2 hidden md:flex">
              <Card className="w-full">
                <CardBody>
                  <div className="mt-5 py-2 text-small text-default-400">
                    2021.07-2024.09，在国汽朴津智能科技（安庆）有限公司任职前端开发，主要使用{" "}
                    <span style={{ color: "#17c964" }}>
                      {" "}
                      vue2/vue3+element{" "}
                    </span>
                  </div>
                  <div className="py-2 text-small text-default-400">
                    2020.04-2020.10，在okx任职前端开发，主要使用
                    <span style={{ color: "#0072F5" }}> react+mobx </span>
                  </div>
                  <div className="py-2 text-small text-default-400">
                    2018.01-2020.04，在北京市商汤科技有限公司任职前端开发，主要使用
                    <span style={{ color: "#01cfea" }}> vue+iview </span>
                  </div>
                  <div className="py-2 text-small text-default-400">
                    2016.11-2018.01，在百度在线网路技术有限公司任职前端开发，主要使用
                    <span style={{ color: "#F54C7A" }}> riot+jq </span>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <OrbitCircleExample />
            </div>
          </div>
          {/* 个人信息
          技能
          经历
          教育
          项目 */}
        </div>
      </section>
    </>
  );
}
