// Import tất cả ảnh
import dataLake from '../assets/diagrams/data_lake.png';
import DDOS from '../assets/diagrams/DDOS.png';
import dashboardImage from '../assets/diagrams/dashboard_diagram.png'
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
        imageUrl: dataLake  // Dùng imported variable
    },
    {
        id: 2,
        title: "Cross-Account S3 Event Handling with Queues and Lambda (Anti-DDoS Design)",
        description: "This setup isolates uploads from multiple consumer accounts. Each S3 bucket event (s3:ObjectCreated:*) is sent to a dedicated SQS queue in a central security account, preventing direct Lambda invocation spikes.Queues buffer traffic and route messages to per-consumer Lambdas that share common scanning code. Failed messages go to DLQs for reliability.The design reduces DDoS risk, smooths event bursts, and keeps scanning consistent and secure across accounts",
        imageUrl: DDOS  // Dùng imported variable
    },
    {
        id: 3,
        title: "Serverless Event-Driven Health Monitoring Pipeline (Multi-Account)",
        description: "CloudWatch Alarms and other event-based services publish to EventBridge in consumer accounts, which route events to a central distribution account. SQS buffers the traffic; a Lambda (configured via SSM) transforms the payload, triggers SNS alerts, and persists records in MongoDB. The Health Dashboard reads MongoDB to visualize real-time status and trends.",
        imageUrl: dashboardImage  // Dùng imported variable
    }
];
