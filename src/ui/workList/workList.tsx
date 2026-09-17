import Work from "../work/work";
import type { WorkProps } from "../work/work";

type WorkPropsEntry = WorkProps & {
    id: number;
};

type WorkListProps = {
    works: WorkPropsEntry[];
    limit?: number;
};

export default function WorkList(props: WorkListProps) {
    if (props.works.length === 0) {
        return <p>Works didn't found.</p>;
    }

    return (
        <>
            {props.limit
                ? props.works
                      .slice(0, props.limit)
                      .map((work) => <Work key={work.id} {...work} />)
                : props.works.map((work) => <Work key={work.id} {...work} />)}
        </>
    );
}
