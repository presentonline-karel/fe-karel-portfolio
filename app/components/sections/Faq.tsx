"use client";

// Next & React
import { useState } from "react";

// Components
import Button from "../components/Button";
import Wrapper from "../helpers/Wrapper";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

// Types
import { FaqProps } from "@/types/sections/Faq";
import { ButtonProps } from "@/types/components/Button";
import { FaqAccordionProps } from "../components/FaqAccordion";



export default function Faq({ data }: FaqProps) {
  console.log("faqData", data);

  return (
    <div className="section">
      <Wrapper className="flex flex-col gap-10 md:flex-row md:gap-20 lg:gap-[109px] hd:border-neutrals-300">

        {/* Text */}
        <div className="md:w-full">
          <h2 className="h h2 mb-4 lg:text-48 lg:leading-13 lg:mb-6 xl:text-56 xl:leading-15">
            {data.content.faqtitle}
          </h2>

          <p className="p mb-6 lg:mb-10">
            {data.content.faqparagraph}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {data.content.faqbutton.map((button: ButtonProps, index: number) => (
              <Button button={button} key={index} />
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className="md:w-full">
          {data.content.faqs.map((faqItem: FaqAccordionProps, index: number) => (
            <Question question={faqItem.question} answer={faqItem.answer} key={index} />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}



const Question = ({ question, answer }: FaqAccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-b border-neutrals-400 overflow-hidden">

      {/* Question container */}
      <div
        onClick={() => (setAccordionOpen(!accordionOpen))}
        className={`pt-3 flex gap-2 items-start text-neutrals-1300 cursor-pointer select-none lg:gap-3 lg:pt-4 ${accordionOpen ? "pb-2 lg:pb-3" : "pb-3 lg:pb-4"}`}
      >
        <FontAwesomeIcon icon={accordionOpen ? faCaretDown : faCaretRight} className="text-20 leading-3 w-2 h-3 pt-[7px] pr-1 lg:text-24 lg:leading-14px lg:w-[9px] lg:h-[14px] lg:pt-2 lg:pr-[5px]" />

        {/* Question */}
        <div className="text-20 leading-26px tracking-tight lg:text-24 lg:leading-30px">
          {question}
        </div>
      </div>

      {/* Answer */}
      <div className={`Answer p pl-5 lg:pl-[26px] ${accordionOpen ? "h-auto opacity-100 pb-3" : "h-0 opacity-0"}`}>
        {answer}
      </div>
    </div>
  )
}