using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    class Kampdeltagelse
    {
        public int Id { get; set; }
        public int Poengsum { get; set; }
        public Kamp Kamp { get; set; }
        public Lag Lag { get; set; }
    }
}
