class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                <div>
                   <p>These are the details</p>
                </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*const app = {
    title: 'Visibility Toggle',
    details: []
};

const details = () => {
    app.details.length>0 ? app.details='' : app.details='These are the details';
    renderToggle();
};

const renderToggle = () => {
    const template = (
       <div>
           <h1>{app.title}</h1>
           <button onClick={details}>{app.details.length>0 ? 'Hide Details' : 'Show Details'}</button>
           {(
               <div>
               <p>{app.details}</p>
               </div>
           )}
       </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
};
renderToggle();
*/