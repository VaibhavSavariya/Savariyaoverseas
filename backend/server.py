from fastapi import FastAPI

app = FastAPI(title="Savariya Overseas")


@app.get("/api/health")
async def health():
    return {"status": "ok"}
