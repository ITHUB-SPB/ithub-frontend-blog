import WorkList from "../ui/workList/workList";

import { works } from "../data";

export default function WorksPage() {
    return (
        <>
            <div className="container">
                <h2 className="works_title">Works</h2>
                <WorkList works={works} />
            </div>
        </>
    );
}
