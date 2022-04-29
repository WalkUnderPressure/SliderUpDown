const slides = [
    {
        id: 1,
        title: '日本国',
        description: 'Country of the rising sun',
        url: 'https://images.unsplash.com/photo-1463319611694-4bf9eb5a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        linearGradient: {
            deg: 280,
            colorsSet: [
                {
                    color: '#d2fff9',
                    percent: 50,
                },
                {
                    color: '#ff5cb4',
                    percent: 100,
                }
            ]
        }
    },
    {
        id: 2,
        title: 'Festival of Lights',
        description: 'Diya lighting, puja, home decoration, shopping, fireworks, fasting, gifts, feast and sweets',
        url: 'https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
        linearGradient: {
            deg: 180,
            colorsSet: [
                {
                    color: '#000000',
                    percent: 10,
                },
                {
                    color: '#cddb5e',
                    percent: 90,
                }
            ]
        }
    },
    {
        id: 3,
        title: 'Brazilian Carnival',
        description: 'Celebration prior to fasting season of Lent.',
        url: 'https://images.unsplash.com/photo-1574724713425-fee7e2eacf84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80',
        linearGradient: {
            deg: 180,
            colorsSet: [
                {
                    color: '#f0778e',
                    percent: 0,
                },
                {
                    color: '#5cbe60',
                    percent: 100,
                }
            ]
        }
    },
    {
        id: 4,
        title: 'Día de los Muertos',
        description: 'Creation of altars to remember the dead, traditional dishes for the Day of the Dead',
        url: 'https://images.unsplash.com/photo-1618329859570-833a0eadba71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        linearGradient: {
            deg: 180,
            colorsSet: [
                {
                    color: '#026f74',
                    percent: 0,
                },
                {
                    color: '#e09674',
                    percent: 100,
                }
            ]
        }
    },
    {
        id: 5,
        title: 'Halloween',
        description: 'Trick-or-treating, costume parties, making jack-o\'-lanterns, lighting bonfires, divination, apple bobbing, visiting haunted attractions.',
        url: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        linearGradient: {
            deg: 0,
            colorsSet: [
                {
                    color: '#000000',
                    percent: 0,
                },
                {
                    color: '#f47c0b',
                    percent: 40,
                },
                {
                    color: '#f47c0b',
                    percent: 60,
                },
                {
                    color: '#000000',
                    percent: 100,
                },
            ]
        }
    },
    {
        id: 6,
        title: 'Christmas',
        description: 'Gift-giving, family and other social gatherings, symbolic decoration, feasting etc.',
        url: 'https://images.unsplash.com/photo-1482638591678-a11589a805f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        linearGradient: {
            deg: 0,
            colorsSet: [
                {
                    color: '#e3f40b',
                    percent: 0,
                },
                {
                    color: '#ff1d00',
                    percent: 90,
                }
            ]
        }
    }
];

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

function addSliderContent() {
    const sideBarItems = slides.map((slide) => {
        const slideImg = document.createElement('div');
        slideImg.setAttribute(
            "style", `background-image: url('${slide.url}')`
        );
        mainSlide.appendChild(slideImg);

        const { title, description, linearGradient } = slide;
        return addSideBarElement(title, description, linearGradient);
    });

    sideBarItems.reverse().forEach((element) => {    
        sidebar.appendChild(element);
    });
}

function addSideBarElement(title, description, linearGradient){
    const sideBarElement = document.createElement('div');

    const { deg, colorsSet } = linearGradient;
    const colorsString = colorsSet
        .map(({ color, percent }) => `${color} ${percent}%`)
        .join(', ');

    sideBarElement.setAttribute(
        'style', `background: linear-gradient(${deg}deg, ${colorsString})`
    );

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    sideBarElement.append(titleElement, descriptionElement);

    return sideBarElement;
}

addSliderContent();

const slidesCount = mainSlide.querySelectorAll('div').length;
const offset = slidesCount - 1;
sidebar.style.top = `-${offset * 100}vh`;

let activeSlideIndex = 0;

const DirectionType = {
    UP: "UP",
    DOWN: "DOWN"
};

upBtn.addEventListener('click', () => {
    changeSlide(DirectionType.UP);
});

downBtn.addEventListener('click', () => {
    changeSlide(DirectionType.DOWN);
});

function changeSlide(direction) {
    switch (direction) {
        case DirectionType.UP: {
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
            }
            break;
        }
        case DirectionType.DOWN: {
            activeSlideIndex--;
            if(activeSlideIndex < 0){
                activeSlideIndex = offset;
            }
            break;
        }
        default:
            break;
    }

    const height = container.clientHeight;
    const fix = Math.floor(activeSlideIndex / 2);
    const heightOffset = (activeSlideIndex * height) - fix;

    mainSlide.style.transform = `translateY(-${heightOffset}px)`;

    const k = (activeSlideIndex === 4) ? 2 : 0;
    const sideHeightOffset = heightOffset + k;
    sidebar.style.transform = `translateY(${sideHeightOffset}px)`;
}
