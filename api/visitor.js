export default async function handler(req, res) {
    const userAgent = req.headers["user-agent"];

    console.log("User-Agent:", userAgent);

    res.status(200).json({
        success: true
    });
}
