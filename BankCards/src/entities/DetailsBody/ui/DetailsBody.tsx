interface DetailsBodyProps {
    companyId: string;
}

export const DetailsBody = ({ companyId }: DetailsBodyProps): JSX.Element => {
    return (
        <div>
            <p>Details</p>
            <p>{companyId}</p>
        </div>
    );
};
