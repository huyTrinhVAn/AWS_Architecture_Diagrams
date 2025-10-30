export interface Diagram {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

export const diagrams: Diagram[] = [
    {
        id: 1,
        title: "Amazon Connect Cross-Account Data Lake with Lake Formation, Glue & Athena (Power BI via ODBC)",
        description: "Amazon Connect datasets are stored in a dedicated data-lake account (S3) and cataloged in the connect_datalake Glue database. Access to this catalog is shared to the Non-Prod analytics account via AWS Resource Access Manager; Lake Formation enforces fine-grained permissions so only approved tables/databases are visible. In Non-Prod, Athena queries the shared Glue tables and writes results to an S3 results bucket. Power BI connects through an ODBC gateway (hosted on GCP) using IAM authentication to run Athena queries for reporting.",
        imageUrl: "/src/assets/diagrams/data_lake.png"
    },
    {
        id: 2,
        title: "Serverless Architecture",
        description: "Kiến trúc serverless sử dụng Lambda, API Gateway, và DynamoDB",
        imageUrl: "/src/assets/diagrams/diagram2.png"
    },
    {
        id: 3,
        title: "Microservices with ECS",
        description: "Hệ thống microservices triển khai trên ECS với service discovery",
        imageUrl: "/src/assets/diagrams/diagram3.png"
    }
];
