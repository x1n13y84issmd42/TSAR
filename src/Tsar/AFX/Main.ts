module Tsar.AFX
{
	/*
	 *	Creates a copy of given object including prototype.
	 */
	export function clone<T extends Object>(o:any):T
	{
		var copy:any = <T>{};
		copy.__proto__ = o.__proto__;

		for (var fI in o)
		{
			if (o.hasOwnProperty(fI))
			{
				if (o[fI] instanceof Object)
				{
					copy[fI] = clone(o[fI]);
				}
				else
				{
					copy[fI] = o[fI];
				}
			}
		}

		return copy;
	}

	/*
	 *	Makes a clone of the dst and fills it with values from the mixed object.
	 *	If overwrite is true then the fields which present in both objects
	 *	will be overwritten with values from the mixed.
	 */
	export function mix(dst, mixed, overwrite=true)
	{
		var res = clone(dst);

		Object.getOwnPropertyNames(mixed).forEach(fieldName => {
			if (!res.hasOwnProperty(fieldName) || overwrite)
			{
				res[fieldName] = mixed[fieldName];
			}
		});

		return res;
	}
}