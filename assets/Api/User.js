export const CreateUser = async (data) => {
    return await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/ld+json",
        },
        body: JSON.stringify(data),
    });
}