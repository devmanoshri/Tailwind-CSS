import Accordion from "../components/Accordion";

function AccordionPage() {
  const accordionData = [
    {
      id: "gjgjhgj",
      label: "Can I use React in my project?",
      content:
        "Yes! You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.",
    },
    {
      id: "dfdgjgjhgj",
      label: "Can I use Angular in my project?",
      content:
        "Yes! You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.",
    },
    {
      id: "wergjgjhgj",
      label: "Can I use Vue in my project?",
      content:
        "Yes! You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.You can use in any of your project.",
    },
  ];
  return <Accordion items={accordionData} />;
}

export default AccordionPage;
