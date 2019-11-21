using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Kamp
    {
        public long Id { get; set; }
        public string Sted { get; set; }    
        public Gren Gren { get; set; }
        public Konkurranse Konkurranse { get; set; }
    }
}
