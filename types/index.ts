import { StaticImageData } from "next/image";

export type TmodalProps = {
    modal: {
        active: boolean;
        index: number;
    };
    projects: {
        img: StaticImageData;
        color: string;
    }[];
};

export type TanimationProps = {
    initial: {
        scale: number;
        x: string;
        y: string;
    };
    enter: {
        scale: number;
        x: string;
        y: string;
        transition: {
            duration: number;
            ease: number[];
        };
    };
    closed: {
        scale: number;
        x: string;
        y: string;
        transition: {
            duration: number;
            ease: number[];
        };
    };
};

export type TprojectProps = {
    title: string,
    index: number,
    setModal: (modal: { active: boolean; index: number; }) => void;
};