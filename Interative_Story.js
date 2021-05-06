const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

funtion showTextMode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    
    textNode.options.forEach(option => {
        if (showOption) {
            document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click'), () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = {
    {
       id:1,
       text: 'You wake up in a random inn, you do not recall how you got here.',
       options: [
        {
            text: 'Panic',
            setState {Panicking: true},
            nextText: 2
        },
        {
            text: 'Run out of inn',
            setText: 2
        }
       ]
    },
{
        id: 2,
        text: 'You end up outside the inn and recognize the town',
        options: [
            {
                text: 'Ask Innkeeper how you got here',
            requiredState: (currentState) =>currentState.Panicking
            setState: {Panicking: false, information: true},
            nextText: 3
            },
            {
                text: 'You think you know where you are, ignore the Innkeeper and keep walking',
                nextText: 3
            }
        ]
    },
        id: 3,
        text: 'After leaving the town you enter a dark forest.',
        options: [
            {
            text: 'Explore Dark Forest',
            nextText: 4
            },
            {
                text: 'Quickly travel through Dark Forest without stopping'
                requiredState: (currentState) =>currentState.information
                nextText: 5
            },
            {
                text: 'Eat lunch with a scenic view'
                requiredState: (currentState) =>currentState.information
                nextText: 6
            }
        ]
    },
    {
        id: 4
        text: 'You do not know the Dark Forest is infested with Vampires and they sneak up on you and you die'
        option: [
            {
                text: 'Restart',
                nextText: -1
                ]
            },
        ]
        id: 5
        text: 'You spoke to the Innkeeper and learned about the vampires, traveled quickly and safely make it back home'
        option: [
            {
                text: 'You live another day did not receive any prize but your still alive!'
                ]
            },
        id: 6 'You spoke with the Innkeeper and learned about the vampires and decided to risk the challenge and claim the gold'
        option: [
            {
                text: 'The Vampires join you for lunch and pose a challenge to you'
                nextText: 7
                ]
            },
        id: 7
        text: 'The vampires want you to guess a riddle, the riddle is, What is full of keys but can not open any doors?'
        var guess = window.promt("What is you guess?");
        alert("Your guess is " + guess)
        if guess = Piano, guess is correct
        }
        options: [
            {
                text: 'You guessed wrong sorry. The vampires kill you'
                nextText: -1
            },
            {
                text: 'You got it! The vampires escort you out of the Dark Forest and give you a five pound gold bar'
                nextText: -1
            }        
        ]     
    }
]

startGame()