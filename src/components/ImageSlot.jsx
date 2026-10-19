// Reusable image placeholder. When a postimg URL is mapped for this tag,
// render a real <img>; otherwise show the placeholder hint.
const POSTIMG_MAP = {
  'IMG-23': 'https://i.postimg.cc/VLNjZ9QH/o-ring.jpg',
  'IMG-24': 'https://i.postimg.cc/d0GdZ4dp/oring-1.jpg',
  'IMG-25': 'https://i.postimg.cc/9Qn1Y8Dg/customrubber-1.jpg',
  'IMG-26': 'https://i.postimg.cc/RZ6w4M0f/oil-seal-1.jpg',
  'IMG-27': 'https://i.postimg.cc/YqVmXJxM/rubber.jpg',
  'IMG-28': 'https://i.postimg.cc/3NxD6h6F/rubber-diaphagrams2.jpg',
  'IMG-29': 'https://i.postimg.cc/Y2dFF4Gq/Rubber-Extrusion-Profile.jpg',
  'IMG-30': 'https://i.postimg.cc/7hKSYh79/image-1-1.jpg',
  'IMG-31': 'https://i.postimg.cc/Qts7Q1Jp/product-range-new-2.jpg',
  'IMG-32': 'https://i.postimg.cc/0Qfwcjt2/ptfe-2.jpg',
  'IMG-33': 'https://i.postimg.cc/y8cWLWdc/die-cut.jpg',
  'IMG-34': 'https://i.postimg.cc/QMDCwsKZ/Spliced-Vulcanized-Gaskets.jpg',
  'IMG-35': 'https://i.postimg.cc/3NxD6h6F/rubber-diaphagrams2.jpg',
  'IMG-36': 'https://i.postimg.cc/y8cWLWdc/die-cut.jpg',
  'IMG-37': 'https://i.postimg.cc/QMDCwsKZ/Spliced-Vulcanized-Gaskets.jpg',
  'IMG-38': 'https://i.postimg.cc/3NxD6h6F/rubber-diaphagrams2.jpg',
  'IMG-39': 'https://i.postimg.cc/0Qfwcjt2/ptfe-2.jpg',
  'IMG-40': 'https://i.postimg.cc/7hKSYh79/image-1-1.jpg',
  'IMG-41': 'https://i.postimg.cc/9Qn1Y8Dg/customrubber-1.jpg',
  'IMG-42': 'https://i.postimg.cc/YqVmXJxM/rubber.jpg',
  'IMG-43': 'https://i.postimg.cc/Qts7Q1Jp/product-range-new-2.jpg',
  'IMG-44': 'https://i.postimg.cc/0Qfwcjt2/ptfe-2.jpg',
  'IMG-45': 'https://i.postimg.cc/y8cWLWdc/die-cut.jpg',
  'IMG-46': 'https://i.postimg.cc/QMDCwsKZ/Spliced-Vulcanized-Gaskets.jpg',
  'IMG-47': 'https://i.postimg.cc/YqVmXJxM/rubber.jpg',
  'IMG-48': 'https://i.postimg.cc/Y2dFF4Gq/Rubber-Extrusion-Profile.jpg',
  'IMG-49': 'https://i.postimg.cc/4xK2W5xD/3e9d4acb442e2d46ebd907eae64f7b1c.jpg',
}

export default function ImageSlot({ tag, ratio = 'wide' }) {
  // If tag is a direct URL, render the image immediately
  const src = POSTIMG_MAP[tag] || (tag && tag.startsWith('http') ? tag : null)
  if (src) {
    return (
      <div className={`imgslot imgslot--${ratio} imgslot--filled`} data-slot={tag}>
        <img src={src} alt={tag} loading="lazy" />
      </div>
    )
  }
  return (
    <div className={`imgslot imgslot--${ratio}`} data-slot={tag}>
      <span className="imgslot__tag">{tag}</span>
      <span className="imgslot__hint">
        Put your image at <code>public/images/{tag.toLowerCase()}.jpg</code> then replace this slot
      </span>
    </div>
  )
}
