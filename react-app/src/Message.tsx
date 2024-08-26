
//PascalCasing: first letter should be capital
function Message() {

    const name = 'IB';
    if(name)
        return <h1>Hello {name}</h1>;
    //JSX: Javascript XML
    return <h1>Hello World!</h1>;
}

export default Message;