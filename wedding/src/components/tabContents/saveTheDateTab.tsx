import { Content } from "../content";

export const SaveTheDateTab = () => {

    return (
        <div>
            <Content children={
                <div>
                    <div>{'Hello'}</div>
                    <h1>{'Heading One'}</h1>
                    <h2>{'Heading Two'}</h2>
                    <h3>{'Heading Three'}</h3>
                    <p>{'Paragrahs will use this styling'}</p>
                </div>
            }/>
            <Content children={
                <div>{'August 29, 2026'}</div>
            }/>
        </div>
    );
}