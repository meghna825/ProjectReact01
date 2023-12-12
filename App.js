/* 
const heading = React.createElement("h1",{},"Hello World from react")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
*/


// Creating a Nested component using React
/*
<div id="parent">
    <div id = "child">
        <h1>Nested React Structure<h1>
        <h2>This h2 Tag sibling</h2>
    </div>
     <div id = "child2">
        <h1>Second Structure<h1>
        <h2>This h2 Second Tag sibling</h2>
    </div>
</div>
*/

const parent = React.createElement('div',
        {id:'parent'},
       [ React.createElement('div',
            {id:'child'},
            [React.createElement('h1',
            {},
            'Nested React Structure'
            ),
            React.createElement('h2',
            {},
            'This h2 Tag sibling'
            )
        ]
        ),
        React.createElement('div',
        {id:'child2'},
        [React.createElement('h1',
        {},
        'Second React Structure'
        ),
        React.createElement('h2',
        {},
        'This h2 Second Tag sibling'
        )
    ]
    ) ]    
    )
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

