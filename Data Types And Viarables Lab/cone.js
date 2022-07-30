function cone (radius, height){

    let lengthOfSlant = Math.sqrt (radius * radius + height * height)
    let coneVolume = Math.PI * (radius * radius * height) / 3
    let coneSurface = Math.PI * radius * (radius + lengthOfSlant)

    console.log(`volume = ${coneVolume.toFixed(4)}`)
    console.log(`area = ${coneSurface.toFixed(4)}`)
}
cone (3, 5)