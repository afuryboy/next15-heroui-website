"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Card,
  CardFooter,
  CardBody,
  CardHeader,
  Link,
  Avatar,
  Image,
} from "@heroui/react";
import Balancer from "react-wrap-balancer";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { sectionWrapper, title, titleWrapper, subtitle } from "../primitives";

type ProjectProp = {
  image: string;
  title: string;
  description: string;
  skill: string;
  type?: string;
};

const ProjectCard = (project: ProjectProp) => {
  const isMounted = useIsMounted();
  return (
    <AnimatePresence>
      {isMounted && (
        <motion.article
        whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          initial={{ opacity: 0, y: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card
            isBlurred
            className="p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
          >
            <CardHeader>
              <Balancer>{project.title}</Balancer>
            </CardHeader>
            <CardBody className="pt-0 px-2 pb-1">
              {project.type === "video" ? (
                <video
                  className="mb-4"
                  src={project.image}
                  autoPlay
                  loop
                  muted
                ></video>
              ) : (
                <Image className="mb-4" src={project.image} />
              )}
              <p className="font-normal w-full text-default-600 text-sm">
                {project.description}
              </p>
            </CardBody>
            <CardFooter className="flex justify-between items-center">
              <p className="font-normal w-full text-default-600 text-sm">
                开发技术：
                <span style={{ color: "#17c964" }}> {project.skill} </span>
              </p>
            </CardFooter>
          </Card>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default function HomeProject() {
  const projects: ProjectProp[] = [
    {
      image: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/blog/project-scene-editor.png",
      title: "场景编辑器",
      description:
        "场景编辑器的项目背景是为了解决服务机器人现有平台中任务管理编辑任务模式单一固定等缺点，无法充分利用机器人功能，因此才有了场景编辑器这一低代码任务平台。",
      skill: "vue + logicFlow",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/blog/project-action-editor.png",
      title: "动作编辑器",
      description:
        "动作编辑器的项目背景是为机器人头部面部底部的动作做一个时间轴的配置，可预览。",
      skill: "vue",
    },

    {
      image: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/blog/project-pji-amr.png",
      title: "机器人统一平台",
      description: "抽离各个类型机器人公共部分",
      skill: "vue3、pina",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/blog/project-okx.png",
      title: "okx法币（响应式改版）",
      description:
        "ok交易所出入金, 当时交易所的网站不是响应式，pc和手机端2套代码，法币是整个公司所有业务中第一个开始响应式改版的业务。截图仅展示法币首页界面。",
      skill: "react hook、mobx",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/video/st-video-4.mp4",
      title: "SenseDOOH 户外广告分析平台",
      description: "SenseDOOH 户外广告分析平台",
      skill: "vue",
      type: "video",
    },
    {
      image: "https://cdn.jsdelivr.net/gh/afuryboy/my-pic@main/video/st-video-3.mp4",
      title: "人脸抓取",
      description: "实时人脸框跟踪",
      skill: "vue",
      type: "video",
    },
  ];
  return (
    <section
      className={sectionWrapper({ class: "mt-16 lg:mt-44" })}
    >
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">项目</h1>
      </div>
      <div className="mt-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {projects.map((project, idx) => (
          <ProjectCard {...project} key={idx} />
        ))}
      </div>
    </section>
  );
}
