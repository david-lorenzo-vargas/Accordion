const app = document.querySelector("#app");

const state = {
  sections: [
    {
      title: "What we do",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi, commodi magni voluptates molestiae ratione veritatis sunt asperiores debitis reprehenderit, aut adipisci, eos nulla beatae repudiandae voluptas reiciendis nostrum ex!"
    },
    {
      title: "Our mission",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi, commodi magni voluptates molestiae ratione veritatis sunt asperiores debitis reprehenderit, aut adipisci, eos nulla beatae repudiandae voluptas reiciendis nostrum ex!"
    },
    {
      title: "Why us?",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi, commodi magni voluptates molestiae ratione veritatis sunt asperiores debitis reprehenderit, aut adipisci, eos nulla beatae repudiandae voluptas reiciendis nostrum ex!"
    },
    {
      title: "Who we are",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sequi, commodi magni voluptates molestiae ratione veritatis sunt asperiores debitis reprehenderit, aut adipisci, eos nulla beatae repudiandae voluptas reiciendis nostrum ex!"
    }
  ],
  selected: false,
  selectedItems: []
};

const createAccordion = () => {
  return state.sections.reduce((acc, section) => {
    return (
      acc +
      `
      <div class='accordion'>
        <div class='accordion__header'>
        ${section.title}
        </div>

        <div class='accordion__body'>
          <div class="accordion__body__content">
            ${section.body}
          </div>
        </div>
      </div>
    `
    );
  }, "");
};

const getAccordionBodyContentHeight = (index) => {
  const accordionBodyContent = [
    ...document.querySelectorAll(".accordion__body__content")
  ];

  return accordionBodyContent[index].offsetHeight;
};

const handleAccordionHeaderClick = (event, index) => {
  const parent = event.currentTarget.parentNode;
  const body = [...document.querySelectorAll(".accordion__body")][index];

  const foundIndex = state.selectedItems.findIndex(
    (itemIndex) => itemIndex === index
  );
  const isSelected = foundIndex !== -1;

  if (isSelected) {
    parent.classList.remove("accordion--active");
    body.style.height = "0px";
    state.selectedItems.splice(foundIndex, 1);
  } else {
    parent.classList.add("accordion--active");
    body.style.height = `${getAccordionBodyContentHeight(index)}px`;
    state.selectedItems.push(index);
  }
};

const addEvents = () => {
  const accordionHeader = [...document.querySelectorAll(".accordion__header")];

  accordionHeader.forEach((element, index) => {
    element.addEventListener("click", (event) => {
      handleAccordionHeaderClick(event, index);
    });
  });
};

const render = () => {
  app.innerHTML = createAccordion();
  addEvents();
};

render();
