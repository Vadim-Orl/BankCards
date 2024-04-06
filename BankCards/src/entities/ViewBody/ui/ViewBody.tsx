interface ViewBodyProps {
    companyId: string;
}

export const ViewBody = ({ companyId }: ViewBodyProps): JSX.Element => {
    return (
        <div>
            <p>View</p>
            <p>{companyId}</p>
        </div>
    );
};
