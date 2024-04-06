interface DelBodyProps {
    companyId: string;
}

export const DelBody = ({ companyId }: DelBodyProps): JSX.Element => {
    return (
        <div>
            <p>Delete</p>
            <p>{companyId}</p>
        </div>
    );
};
