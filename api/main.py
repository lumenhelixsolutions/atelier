"""
Atelier API — DropClass-first formation shell.

Mounts DropClass routes when the sibling package is installed editable.
"""

from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI(
    title="Atelier",
    description="Agent formation shell — DropClass v1",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5180",
        "http://localhost:5180",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health() -> dict:
    dropclass_ok = False
    try:
        import dropclass  # noqa: F401

        dropclass_ok = True
    except ImportError:
        pass
    return {
        "status": "ok",
        "shell": "atelier",
        "dropclass_package": dropclass_ok,
    }


def _mount_dropclass() -> None:
    try:
        from dropclass.api.routes import router as formation_router

        app.include_router(formation_router, prefix="/api/formation")
    except ImportError:
        pass


_mount_dropclass()