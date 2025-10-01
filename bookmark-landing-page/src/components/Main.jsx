export default function Main({children}){
    return(
        <main style={{
            display:"grid",
            justifyContent:"center",
            alignContent:"center"
        }}>
           {children} 
        </main>
    )
}