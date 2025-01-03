import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { faqData } from '@/data/faqData'

const FAQ = () => {
  return (
    <>
      <section className="font-base border-t-2 border-black overflow-hidden">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-3">

          <div className="col-span-3 md:col-span-1 bg-red-300 p-10 border-t-2 border-b-2\ border-black">
            <h1 className="mb-10 text-left text-9xl font-heading m1300:text-3xl m700:text-2xl m500:text-xl lg:mb-10">
              {faqData.title}
            </h1>
            <p className="text-left text-xl">
              {faqData.description}
            </p>
          </div>

          <div className="col-span-3 md:col-span-2">
            {faqData.questions.map((item, index) => (
              <Accordion
                key={index}
                className="text-base sm:text-lg"
                type="single"
                collapsible
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-normal">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default FAQ