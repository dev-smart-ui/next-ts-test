import Image from "next/image"


export const AboutView = () => {

  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl uppercase">About</h1>
        <p className="mt-2 text-lg leading-[1.2] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, sequi.
        </p>
      </div>

      <div className="mt-8">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum necessitatibus quaerat iusto officiis corporis. Sed distinctio culpa incidunt maiores blanditiis nemo! Perspiciatis quas, ab tempore quam necessitatibus quibusdam culpa deleniti similique modi illo iure excepturi doloremque, possimus doloribus id dolores. Mollitia, accusantium! Inventore aspernatur distinctio quas sapiente laborum pariatur dicta dignissimos itaque quam molestias totam numquam sequi a possimus architecto, explicabo delectus facilis optio excepturi corporis soluta voluptate rem ipsa. Soluta, quam fugit magnam nobis ipsa assumenda ab quia aliquid quae alias totam deleniti optio sapiente? Est, et dolorem quam voluptas beatae ea molestias dolores minus. Maxime mollitia quos quam.</p>
        <Image 
          src="/posts/1.jpg" 
          width={1000} 
          height={300} 
          alt="" 
          className="w-full h-[300px] object-cover my-6"
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sapiente ad optio ratione quasi voluptas, culpa hic corrupti laboriosam asperiores aliquam obcaecati, autem labore molestias. Autem harum perferendis odit. Magni, dolore nemo modi iste assumenda autem quos animi voluptatum, omnis enim nulla ducimus veritatis placeat consectetur? Porro consectetur quibusdam quasi!</p>
        <Image 
          src="/posts/2.jpg" 
          width={1000} 
          height={300} 
          alt="" 
          className="w-full h-[300px] object-cover my-6"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolor, consectetur eligendi quae nemo inventore, earum iure qui suscipit rerum assumenda eos id vel quisquam sit architecto provident, facilis libero quos ipsa eaque consequuntur asperiores. Rerum itaque quas adipisci voluptatem tempore, molestiae maiores quasi, optio nisi cum quis eum explicabo placeat esse amet dolores, recusandae quod odio voluptas similique quaerat magnam asperiores! Sit veritatis quasi impedit, a deserunt harum mollitia.</p>
      </div>
    </div>
  )
}
