import { injectable } from 'tsyringe';
import sql from 'mssql';

@injectable()
export class LeadRepository {
    public dbConfig: string;

    constructor() {
        this.dbConfig = process.env.CONNECTIONSTRING || "";
    }

    public async addLead(name: string, email: string, mobile: string, postcode: string, servicetype: string): Promise<any> {
        const pool = await sql.connect(this.dbConfig);
        let query = 'EXEC [dbo].[usp_AddLead] @LeadName, @Email, @Mobile, @PostalCode, @ServiceTypeId';

        const result = await pool.request()
            .input('LeadName', sql.VarChar, name)
            .input('Email', sql.VarChar, email)
            .input('Mobile', sql.VarChar, mobile)
            .input('PostalCode', sql.VarChar, postcode)
            .input('ServiceTypeId', sql.Int, servicetype)
            .query(query);

        return  {
            id: result.recordset[0]['NewLeadId']
        };
    }

    public async getLead(id: string): Promise<any> {
        const pool = await sql.connect(this.dbConfig);
        let query = 'EXEC [dbo].[usp_GetLead] @LeadId';

        const result = await pool.request()
            .input('LeadId', sql.UniqueIdentifier, id)
            .query(query);

        return result.recordset[0];
    }

    public async getLeads(): Promise<any[]> {
        await sql.connect(this.dbConfig);

        const result = await sql.query('EXEC [dbo].[usp_GetLeads]');

        return result.recordset;
    }
}
