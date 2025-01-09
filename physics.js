function getAcceleration(obj){
    if("f" in obj && "m" in obj){
        return obj["f"]/obj["m"]
    }
    if("Δv" in obj && "Δt" in obj){
        return obj["Δv"]/obj["Δt"]
    }
    if("d" in obj && "t" in obj){
        return 2*obj["d"]/(obj["t"]*obj["t"])
    }
    return "impossible"
}