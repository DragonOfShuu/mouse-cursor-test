type Props = {
    property: string;
    displayName: string;
};

const MouseHoverDiv = (props: Props) => {
    return (
        <div
            className={"mouse-hover-outer-div group"}
            style={{ cursor: props.property }}
        >
            <div
                className={`
                  mouse-hover-div absolute group-hover:-translate-x-5 group-hover:-translate-y-5 
                  group-hover:shadow-2xl group-hover:shadow-primary-900 group-hover:border-8 
                  border-primary-500 transition-all duration-200 box-border
                `}
            >
                <p>{props.displayName}</p>
            </div>
        </div>
    );
};

export default MouseHoverDiv;
