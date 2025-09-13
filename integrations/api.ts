export const getTotpcodes = async () => {
    try {
        const response = await fetch("https://shieldy.vercel.app/api/totp", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }

        });

        if (!response.ok) {
            const body = await response.text();
            throw new Error(`Erro HTTP ${response.status}: ${body}`);
        }

        const data = await response.json();
        return data;

    } catch (error:any) {
        console.log("Mensagem:", error.message);
        console.log("Stack:", error.stack);

    }
}
