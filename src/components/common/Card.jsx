/**
 * Composant Card réutilisable
 */
const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  onClick,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-md transition-shadow duration-200'

  const hoverClass = hover ? 'hover:shadow-lg cursor-pointer' : ''

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const classes = `
    ${baseClasses}
    ${hoverClass}
    ${paddingClasses[padding]}
    ${className}
  `.trim()

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Sous-composants pour structure de Card
 */
Card.Header = ({ children, className = '' }) => (
  <div className={`border-b border-gray-200 pb-4 mb-4 ${className}`}>
    {children}
  </div>
)

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-xl font-display font-bold text-gray-900 ${className}`}>
    {children}
  </h3>
)

Card.Description = ({ children, className = '' }) => (
  <p className={`text-gray-600 text-sm mt-1 ${className}`}>
    {children}
  </p>
)

Card.Body = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
)

Card.Footer = ({ children, className = '' }) => (
  <div className={`border-t border-gray-200 pt-4 mt-4 ${className}`}>
    {children}
  </div>
)

export default Card
