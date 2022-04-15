import { sum } from '../Welcome';

function Hello() {
    return <div>This is Hello Component {sum(20, 70)}</div>;
}

export { Hello };