// Reusable image placeholder. Set src when the user uploads a real image
// into public/images/. Each IMG-xx label corresponds to a slot below.
export default function ImageSlot({ tag, ratio = 'wide' }) {
  return (
    <div className={`imgslot imgslot--${ratio}`} data-slot={tag}>
      <span className="imgslot__tag">{tag}</span>
      <span className="imgslot__hint">
        Put your image at <code>public/images/{tag.toLowerCase()}.jpg</code> then replace this slot
      </span>
    </div>
  )
}
