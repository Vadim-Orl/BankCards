interface DetailsBodyProps {
    companyId: string;
}

export const DetailsBody = ({ companyId }: DetailsBodyProps): JSX.Element => {
    return (
        <div>
            <p>Deteles</p>
            <p>{companyId}</p>
        </div>
    );
};
